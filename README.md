# sc2tracker

Simple web app that uses the Battle.net API to retreive player data and statistics

# How to run app

Frontend
--------
- `cd static`
- `npm run watch`

Backend
-------
- if no venv `python3 -m venv .venv`
- `soure .venv/bin/activate`
- `cd server`
- `pip install -r requirements.txt`
- `python server.py`

Notes
-----
- If changes not loading, empty cache and hard reload