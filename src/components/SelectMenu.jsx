import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function SelectMenu({ data, label, selectedIndex=0, onChange, className }) {
  const [selected, setSelected] = useState(data[selectedIndex])

  const handleChange = (item) => {
    setSelected(item)
    onChange?.(item)
  }

  const buttonClassName = clsx(
    'relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-complement-500 sm:text-sm sm:leading-6',
    className,
  )

  return (
    <Listbox value={selected} onChange={handleChange} >
      {({ open }) => (
        <>
        {label && (
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">{label}</Listbox.Label>
        )}
          <div className="relative mt-2">
            <Listbox.Button className={buttonClassName}>
              <span className="flex items-center">
                <img src={selected.image} alt="" className="h-6 w-6 flex-shrink-0 rounded-full saturate-0" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {data.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-complement-200' : '',
                        'relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={item.image} alt="" className="h-6 w-6 flex-shrink-0 rounded-full saturate-0" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {item.name}
                          </span>
                        </div>

                        {selected ? (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-complement-500">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
