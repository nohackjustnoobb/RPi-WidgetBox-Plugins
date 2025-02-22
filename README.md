# RPi WidgetBox Plugins

This repository contains example plugins and official plugins for [RPi-WidgetBox](https://github.com/nohackjustnoobb/RPi-WidgetBox).

## Available Plugins

- Fullscreen Clock

```
https://raw.githubusercontent.com/nohackjustnoobb/RPi-WidgetBox-Plugins/refs/heads/static/fullscreen-clock/meta.json
```

- Weather Open-Meteo

```
https://raw.githubusercontent.com/nohackjustnoobb/RPi-WidgetBox-Plugins/refs/heads/static/weather-open-meteo/meta.json
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
      "name": "<your-config-name>",
      // Input type (used in <input type="text">)
      // There are some special type that can be used. Check next section for more information.
      "type": "text",
      // Default value of the config
      "default": true
    }
  ]
}
```

#### Important Notes

- The plugin name (`name` in `meta.json`) must be a valid web component name.
- Configuration attribute names (`configs.name` in `meta.json`) must be valid HTML attribute names.

### Special Types

1. `select`

If the type is set to `select`, the configuration will use an HTML `<select>` dropdown element instead of a standard input field.

To define the available options for the dropdown, use the options field. Each option should include a name (the text displayed in the dropdown) and a value (the actual stored value).

```json
{
  "<others...>": "<metadata>",
  "configs": [
    {
      "name": "<your-config-name>",
      // Specifies that this is a dropdown
      "type": "select",
      "default": "<your-default-value>"
      "options": [
        {
          // Text displayed in the dropdown
          "name": "<your-option-name>",
          // Value associated with this option
          // If not specified, defaults will be the name of the option
          "value": "<your-option-value>"
        }
      ]
    }
  ]
}
```
