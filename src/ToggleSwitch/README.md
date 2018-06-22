# ToggleSwitch

The ToggleSwitch is a nicer interface than just a checkbox.

It is used when a setting is a boolean, and has an on and off state.

## Properties

 propName  | propType                    | defaultValue | isRequired
-----------|-----------------------------|--------------|:----------:
 checked   | Boolean                     | false        |
 labelText | String                      | ""           |
 name      | String                      |              | ✓
 onChange  | Function                    | `() => {}`   |
 value     | Either a string or a number |              | ✓

## Notes

For each `<ToggleSwitch>`, it'll need a unique `name` and `value`, as
this is used to generate the `inputId()`, which links the `input` with
the `.toggle`.

If two or more `<ToggleSwitch>` share a `name` and `value`, toggling
any of them will toggle only the first one.
