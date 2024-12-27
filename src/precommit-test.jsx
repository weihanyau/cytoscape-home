const test1 = () => {
    const message = 'Hello world'; // Missing semicolon (linting issue)
    return <h1>{message}</h1>; // Incorrect indentation (formatting issue)
};

export default test1;
