import { get } from "svelte/store"

let _selectedClass = $state("")

export const selectedClass = {
    get: () => _selectedClass,
    set: (value:string) => {
        _selectedClass = value;
    }
};