echo "hi there"
mongo -h
mongoimport --db mongo-test --collection users --file seed_user_preferences.json --uri=mongodb://mongo:27017
mongoimport --db mongo-test --collection sessions --file seed_session_data.json --uri=mongodb://mongo:27017
#mongoimport --collection sessions --file seed_session_data.json --jsonArray --uri=mongodb://mongo:27017
