module.exports = {
    "menu": [
        {
            "name": "My checkpoint",
            "link": "/my-checkpoint",
            "icon": "ft-file-text",
            "group": "common",
            "module": "main"
        },
        {
            "name": "History",
            "link": "/history",
            "group": "common",
            "icon": "ft-clock",
            "module": "main"
        },
        {
            "name": "Settings",
            "link": "/setting",
            "group": "system",
            "icon": "ft-settings",
            "module": "main"
        },
        {
            "name": "Administrator",
            "link": "/assignment",
            "group": "system",
            "icon": "ft-unlock",
            "module": "main"
        }
    ],
    "permissions": {
        "can_create_invoice": true,
        "can_export_invoice": true,
        "can_detail_invoice": true,
        "can_suggest_bank": true,
        "can_upload_bank": true,
        "can_map_bank_with_invoice": true
    }
}