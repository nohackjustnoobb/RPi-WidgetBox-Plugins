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

### `meta.json` Structure

Below is an example of a `meta.json` file:

```json
{
  // The name of the web component
  "name": "custom-plugin",
  "version": "1.0.0",
  // (Optional)
  "description": "A custom plugin.",
  // (Optional)
  "url": "<url-to-this-meta.json>",
  // Define the plugin's script (only one of "url" or "inline" is required)
  "script": {
    "url": "<url-to-your-script>",
    "inline": "javascript..."
  },
  // Configuration options (can be empty if the plugin has no configs)
  "configs": [
    {
      // Attribute name passed to the web component
      "name": "config",
      // Input type (used in <input type="text">)
      "type": "text",
      // Default value of the config
      "default": true
    }
  ]
}
```

### Important Notes

- The plugin name (`name` in `meta.json`) must be a valid web component name.
- Configuration attribute names (`configs.name` in `meta.json`) must be valid HTML attribute names.
