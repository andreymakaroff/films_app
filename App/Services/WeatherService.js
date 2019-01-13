import { create } from 'apisauce'
import { Config } from 'App/Config'

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */

const weatherApiClient = create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

function fetchTemperature() {
  return weatherApiClient.get('?page=1&results=20').then((response) => {
    // console.log(response);
    if (response.ok) {
      console.log(response.data.results)
      return response.data.results
    }

    return null
  })
}

export const WeatherService = {
  fetchTemperature,
}
