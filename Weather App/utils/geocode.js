const request = require('request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicm9oYW5kb3NoaWNvbGxlZ2UiLCJhIjoiY2t3aXVxYmF2MHdpMTJ0bWRqNTJtZXplZyJ9.7rwCrR0jAtIbvVxiEROvjg&limit=1'

  request({
    url,
    json: true
  }, (error, {
    body
  }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      })
    }
  })
}
//! encodeURIComponent takes care of special characters like ?/~

module.exports = geocode;