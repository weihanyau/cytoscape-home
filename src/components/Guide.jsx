import { WizardDialog } from '@/components/base/WizardDialog';
import { EnrichmentWizard } from '@/components/wizards/EnrichmentWizard';
import { GeneWizard } from '@/components/wizards/GeneWizard';
import { NetworkWizard } from '@/components/wizards/NetworkWizard';
import { Radio, RadioGroup } from '@headlessui/react';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

const INITIAL_TITLE = 'What would you like to do?';
const DEF_SUBMIT_LABEL = 'Submit';

const cards = [
    {
        type: 'gene',
        name: 'Gene Analysis',
        description: 'I have one gene or a simple list of genes.',
        submitLabel: 'Results',
        wizard: GeneWizard,
    },
    {
        type: 'enrichment',
        name: 'Enrichment Analysis',
        description: 'I have a file with differential expression data.',
        submitLabel: 'Go to EnrichmentMap',
        wizard: EnrichmentWizard,
    },
    {
        type: 'network',
        name: 'Network Figure',
        description: 'I have data I want to visualize as a network.',
        submitLabel: 'Go to Cytoscape Web',
        wizard: NetworkWizard,
    },
];

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const WizardSelector = ({ onChange }) => {
    const [, setSelected] = useState();

    const handleChange = (card) => {
        setSelected(card);
        onChange(card);
    };

    return (
        <fieldset aria-label="Server size">
            <RadioGroup
                onChange={handleChange}
                className="space-y-4"
            >
                {cards.map((plan) => (
                    <Radio
                        key={plan.name}
                        value={plan}
                        aria-label={plan.name}
                        aria-description={`${plan.ram}, ${plan.cpus}, ${plan.disk}, ${plan.price} per month`}
                        className={({ focus }) =>
                            classNames(
                                focus ? 'border-complement-600 ring-2 ring-complement-600' : '',
                                !focus ? 'border-gray-300' : '',
                                'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between',
                            )
                        }
                    >
                        {({ checked, focus }) => (
                            <>
                                <span className="flex flex-col items-start">
                                    <span className="font-medium text-gray-900">{plan.name}</span>
                                    <span className="text-sm text-left text-gray-500">{plan.description}</span>
                                </span>
                                <span
                                    className={classNames(
                                        checked ? 'border-complement-500' : 'border-transparent',
                                        focus ? 'border' : 'border-2',
                                        'pointer-events-none absolute -inset-px rounded-lg',
                                    )}
                                    aria-hidden="true"
                                />
                            </>
                        )}
                    </Radio>
                ))}
            </RadioGroup>
        </fieldset>
    );
};
WizardSelector.propTypes = {
    onChange: PropTypes.func,
};

export function Guide({ open = false, onClose, onSubmit }) {
    const [step, setStep] = useState(-1);
    const [totalSteps, setTotalSteps] = useState(2);
    const [title, setTitle] = useState(INITIAL_TITLE);
    const [submitLabel, setSubmitLabel] = useState(DEF_SUBMIT_LABEL);
    const [canContinue, setCanContinue] = useState(false);

    const wizardRef = useRef();

    const reset = () => {
        // Go back to the first screen (the card selector)
        setStep(-1);
        setTotalSteps(2);
        setTitle(INITIAL_TITLE);
        setSubmitLabel(DEF_SUBMIT_LABEL);
        setCanContinue(false);
        wizardRef.current = null;
    };
    const handleClose = () => {
        reset();
        onClose();
    };
    const handleCanContinue = (b) => {
        setCanContinue(b);
    };
    const handleSubmit = (data) => {
        reset();
        onSubmit(data);
    };
    const onPrevious = () => {
        if (step === 0) {
            reset(); // TODO keep previous selection
        } else {
            setStep(step - 1);
        }
    };
    const onNext = () => {
        setStep(step + 1);
        setCanContinue(false);
    };
    const onWizardChange = (card) => {
        if (card) {
            wizardRef.current = card.wizard;
            setSubmitLabel(card.submitLabel);
            setCanContinue(true);
        }
    };

    const Wizard = wizardRef.current;

    return (
        <WizardDialog
            open={open}
            totalSteps={totalSteps}
            step={step}
            title={title}
            submitLabel={submitLabel}
            onClose={handleClose}
            onPrevious={onPrevious}
            onNext={onNext}
            canContinue={canContinue}
        >
            {step < 0 ? (
                <WizardSelector onChange={onWizardChange} />
            ) : (
                <Wizard
                    step={step}
                    setTotalSteps={setTotalSteps}
                    setTitle={setTitle}
                    onCanContinue={handleCanContinue}
                    onSubmit={handleSubmit}
                />
            )}
        </WizardDialog>
    );
}
Guide.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
};
