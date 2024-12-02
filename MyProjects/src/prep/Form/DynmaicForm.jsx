import React, { useState } from 'react';

const DynamicForm = () => {
    const [fields, setFields] = useState([
        { name: "Name", value: "", type: "text" },
        { name: "Email", value: "", type: "email" },
        { name: "Age", value: "", type: "number" },
    ]);
    const [error, setError] = useState("");

    // Handle input changes
    const handleInputChange = (index, value) => {
        const updatedFields = fields.map((field, i) =>
            i === index ? { ...field, value } : field
        );
        setFields(updatedFields);
    };

    // Add a new field with a specific type
    const addField = (fieldType) => {
        const fieldName = fieldType.charAt(0).toUpperCase() + fieldType.slice(1); // Capitalize first letter
        setFields([...fields, { name: fieldName, value: "", type: fieldType }]);
    };

    // Validation logic
    const validateField = (field) => {
        if (!field.value) return `Please fill the ${field.name} field.`;

        if (field.type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) return "Please enter a valid email.";
        }

        if (field.type === "number" && isNaN(field.value)) {
            return `${field.name} must be a number.`;
        }

        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        for (const field of fields) {
            const validationError = validateField(field);
            if (validationError) {
                setError(validationError);
                return;
            }
        }

        alert("Form submitted successfully!");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        <label>
                            {field.name}:
                            <input
                                type={field.type}
                                value={field.value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                style={{ marginLeft: "10px" }}
                            />
                        </label>
                    </div>
                ))}
                <div style={{ marginBottom: "10px" }}>
                    <button type="button" onClick={() => addField("text")}>Add Text Field</button>
                    <button type="button" onClick={() => addField("email")}>Add Email Field</button>
                    <button type="button" onClick={() => addField("password")}>Add Password Field</button>
                    <button type="button" onClick={() => addField("number")}>Add Number Field</button>
                </div>
                <button type="submit">Submit</button>

                {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            </form>
        </div>
    );
};

export default DynamicForm;
