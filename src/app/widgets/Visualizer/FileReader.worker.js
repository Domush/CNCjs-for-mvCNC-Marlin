

onmessage = function ({ data }) {
    const { file, meta } = data;
    const reader = new FileReader();

    reader.onloadend = (event) => {
        const { result, error } = event.target;

        if (error) {
            return;
        }

        postMessage({
            meta: meta,
            result: result
        });
    };

    try {
        reader.readAsText(file);
    } catch (err) {
        // Ignore error
    }
};
