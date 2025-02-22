#!/bin/bash

DEST_DIR="./build"

mkdir -p "$DEST_DIR"

process_directory() {
    local dir="$1"

    if [[ -f "$dir/package.json" ]]; then
        echo "Installing dependencies in $dir using yarn..."
        (cd "$dir" && yarn install) || {
            echo "Dependency installation failed in $dir"
            return
        }
    fi

    if [[ -f "$dir/meta.json" ]]; then
        echo "Building project in $dir..."
        (cd "$dir" && yarn run build) || {
            echo "Build failed in $dir"
            return
        }

        echo "Copying and renaming JavaScript files from $dir to $DEST_DIR..."
        mkdir -p "$DEST_DIR/$(basename "$dir")"
        find "$dir/dist" -name "*.js" -exec cp {} "$DEST_DIR/$(basename "$dir")/index.js" \;

        echo "Copying meta.json from $dir to build folder..."
        cp "$dir/meta.json" "$DEST_DIR/$(basename "$dir")/"
    else
        echo "meta.json not found in $dir, skipping build."
    fi
}

find . -maxdepth 1 -type d | while read -r dir; do
    process_directory "$dir"
done
