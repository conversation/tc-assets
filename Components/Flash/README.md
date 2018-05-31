# Flash

The Flash is used to represent a message to a user that an event has occurred.
These fall into three categories:

- `notice`, for general alerts and success messages.
- `warning`, for when a dangerous event might occur.
- `alert`, for when an event has failed to perform a certain action, usually due to some error.

## Properties

 propName | propType                                 | defaultValue | isRequired
----------|------------------------------------------|--------------|:----------:
 fade     | Boolean                                  | false        |
 message  | String                                   | ""           |
 type     | String of "notice", "warning" or "alert" | undefined    |
