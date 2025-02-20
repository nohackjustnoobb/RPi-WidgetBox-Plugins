#!/bin/bash

DEST_DIR="./build"

mkdir -p "$DEST_DIR"

process_directory() {
    local dir="$1"

    if [[ -f "$dir/package.json" && -f "$dir/meta.json" ]]; then
        echo "Building project in $dir using yarn..."
        (cd "$dir" && yarn install && yarn run build) || {
            echo "Build failed in $dir"
            return
        }
    else
        echo "Required files not found in $dir, skipping."
        return
    fi

    echo "Copying and renaming JavaScript files from $dir to $DEST_DIR..."
    mkdir -p "$DEST_DIR/$(basename "$dir")"
    find "$dir/dist" -name "*.js" -exec cp {} "$DEST_DIR/$(basename "$dir")/index.js" \;

    echo "Copying meta.json from $dir to build folder..."
    cp "$dir/meta.json" "$DEST_DIR/$(basename "$dir")/"
}

find . -maxdepth 1 -type d | while read -r dir; do
    process_directory "$dir"
done
