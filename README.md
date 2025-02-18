# RPi WidgetBox Plugins

This repository contains example plugins and official plugins for [RPi-WidgetBox](https://github.com/nohackjustnoobb/RPi-WidgetBox).

## Available Plugins

- Fullscreen Clock

```
https://raw.githubusercontent.com/nohackjustnoobb/RPi-WidgetBox-Plugins/refs/heads/static/fullscreen-clock/meta.json
```

- More coming soon !!

## Creating a New Plugin

Building a new plugin is simple. You only need:

1. A `meta.json` file that defines the plugin's metadata.
2. A script that defines a custom web component.

`meta.json` Structure

Below is an example of a `meta.json` file:

```json
{
  "name": "custom-plugin", // The name of the web component
  "version": "1.0.0",
  "description": "A custom plugin.", // (Optional)
  "url": "<url-to-this-meta.json>", // (Optional)
  // Define the plugin's script (only one of "url" or "inline" is required)
  "script": {
    "url": "<url-to-your-script>",
    "inline": "javascript..."
  },
  // Configuration options (can be empty if the plugin has no configs)
  "configs": [
    {
      "name": "config", // Attribute name passed to the web component
      "type": "text", // Input type (used in <input type="text">)
      "default": true // Default value of the config
    }
  ]
}
```

### Important Notes

- The plugin name (`name` in `meta.json`) must be a valid web component name.
- Configuration attribute names (`configs.name` in `meta.json`) must be valid HTML attribute names.
