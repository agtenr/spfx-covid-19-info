# COVID-19 SPFx webpart

![COVID-19 info](/assets/covid-counter.gif)

This solution contains a web part that displays info about the COVID-19 virus for a given country.
The following info is displayed:
 - Confirmed cases
 - Deaths
 - Recoverd

API resource: https://ainize.ai/laeyoung/wuhan-coronavirus-api

## Web part configuration

The table below gives an overview of the configuration settings of the web part:
| Property                             	| Group                  	| Description                                                                                               	| Default 	|
|--------------------------------------	|------------------------	|-----------------------------------------------------------------------------------------------------------	|---------	|
| iso2 Country Code                    	| Country Settings       	| Defines the country for which the COVID-19 info should be displayed example: BE for Belgium               	| None    	|
| Show history button                  	| Web part configuration 	| Determines whether or not the history icon is shown. This can be used to show an graph of historical data 	| False   	|
| View more statistics                 	| Web part configuration 	| Provide an optional external link to more details statistics                                              	| None    	|
| Up count duration                    	| Web part configuration 	| Number of seconds for the counters to count up                                                            	| 2       	|
| Color for the Confirmed Cases number 	| Web part configuration 	| Defines the color of the Confirmed cases number                                                           	| #69797e 	|
| Color for the Deaths number          	| Web part configuration 	| Defines the color of the Deaths number                                                                    	| #d13438 	|
| Color for the Recovered number       	| Web part configuration 	| Defines the color of the Recovered number                                                                 	| #498205 	|

## Minimal Path to Awesome

 - Clone the reposirory
 - Move to the solution folder
 - run `npm install`
 - run `gulp serve`

## Package & Deploy

 - run `gulp build --ship`
 - run `gulp package-solution --ship`
 - upload the `spfx-covid-19-info.sppkg` to the app catalog
 - Add the `spfx-covid-19-info-client-side-solution` to the site
 - Add the `COVID-19 info` web part to the page

## Releases
All release can be found on the [releases](https://github.com/agtenr/spfx-covid-19-info/releases) page.

