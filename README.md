# Streamlit App with Testing

## Usage

Installation:

```bash
pip install -r requirements.txt
```

Run:

```bash
streamlit run app.py
```

## Testing

Install yarn by following the instructions at
<https://classic.yarnpkg.com/en/docs/install/>.

Install testing dependencies by running `yarn`. Open the Cypress app by 
running `yarn run cypress open`.

In a separate terminal make sure to open your app by running:

```bash
streamlit run app.py
```

Then, within the Cypress application click "Run all specs".

## Cypress Dashboard

Every push on this repo runs a test for which the video of the run can be seen
at <https://dashboard.cypress.io/projects/c2ekjb/runs>