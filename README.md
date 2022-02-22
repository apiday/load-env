# Load environment action

This action load the environment file located in `.github/variables`.

## Inputs

### `environment`

The name of the environment to load. Default `""`.
If the environment is `staging`, the loaded file will be `.github/variables/staging.env`.

## Example usage

```
# Should be placed after "actions/checkout"
- uses: apiday/load-env@v1
  with:
    environment: '${{ github.ref_name }}'
```
