CREATE TABLE merchants (
    id SERIAL,
    merchant_name VARCHAR(255) NOT NULL,
    country_id INTEGER NOT NULL, --f
    created_at TIMESTAMP NOT NULL,
    admin_id INTEGER NOT NULL, --f
    merchant_type_id INTEGER NOT NULL, --f

    PRIMARY KEY (id),
    FOREIGN KEY (country_id) REFERENCES countries(id),
    FOREIGN KEY (admin_id) REFERENCES users(id),
    FOREIGN KEY (merchant_type_id) REFERENCES merchant_types(id)
);