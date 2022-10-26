import { Launch } from "../types/launches";

export const launchesMockData: Launch[] = [
  {
    name: "Falcon 9 Block 5 | Starlink Group 4-31",
    id: "4d3bde71-3ead-4236-af5b-eccfa7549f4f",
    date: "2022-10-28T01:00:00Z",
    slug: "1234",
    status: {
      id: 2,
      name: "To Be Confirmed",
    },
  },
  {
    name: "2Falcon 9 Block 5 | Starlink Group 4-31",
    id: "224d3bde71-3ead-4236-af5b-eccfa7549f4f",
    date: "2022-09-28T01:00:00Z",
    slug: "1234",
    status: {
      id: 2,
      name: "To Be Confirmed",
    },
  },
];

export const mockApiResult = JSON.parse(`
{
    "results": [
        
        {
            "id": "0d779392-1a36-4c1e-b0b8-ec11e3031ee6",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/0d779392-1a36-4c1e-b0b8-ec11e3031ee6/",
            "slug": "falcon-9-block-5-crew-3",
            "name": "Falcon 9 Block 5 | Crew-3",
            "status": {
                "id": 3,
                "name": "Launch Successful",
                "abbrev": "Success",
                "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
            },
            "last_updated": "2022-10-24T02:54:03Z",
            "net": "2021-11-11T02:03:31Z",
            "window_end": "2021-11-11T02:03:31Z",
            "window_start": "2021-11-11T02:03:31Z",
            "probability": 70,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 121,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                "name": "SpaceX",
                "type": "Commercial"
            },
            "rocket": {
                "id": 2812,
                "configuration": {
                    "id": 164,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/164/",
                    "name": "Falcon 9",
                    "family": "Falcon",
                    "full_name": "Falcon 9 Block 5",
                    "variant": "Block 5"
                }
            },
            "mission": {
                "id": 1220,
                "name": "Crew-3",
                "description": "SpaceX Crew-3 is the third crewed operational flight of a Crew Dragon spacecraft to the International Space Station as part of NASA's Commercial Crew Program.",
                "launch_designator": null,
                "type": "Human Exploration",
                "orbit": {
                    "id": 8,
                    "name": "Low Earth Orbit",
                    "abbrev": "LEO"
                }
            },
            "pad": {
                "id": 87,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/87/",
                "agency_id": null,
                "name": "Launch Complex 39A",
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39#Launch_Pad_39A",
                "map_url": "http://maps.google.com/maps?q=28.608+N,+80.604+W",
                "latitude": "28.60822681",
                "longitude": "-80.60428186",
                "location": {
                    "id": 27,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/27/",
                    "name": "Kennedy Space Center, FL, USA",
                    "country_code": "USA",
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_27_20200803142447.jpg",
                    "total_launch_count": 208,
                    "total_landing_count": 0
                },
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_87_20200803143537.jpg",
                "total_launch_count": 151,
                "orbital_launch_attempt_count": 149
            },
            "webcast_live": true,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20211101043747.jpeg",
            "infographic": null,
            "program": [
                {
                    "id": 17,
                    "url": "https://lldev.thespacedevs.com/2.2.0/program/17/",
                    "name": "International Space Station",
                    "description": "The International Space Station programme is tied together by a complex set of legal, political and financial agreements between the sixteen nations involved in the project, governing ownership of the various components, rights to crewing and utilization, and responsibilities for crew rotation and resupply of the International Space Station. It was conceived in 1984 by President Ronald Reagan, during the Space Station Freedom project as it was originally called.",
                    "agencies": [
                        {
                            "id": 16,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/16/",
                            "name": "Canadian Space Agency",
                            "type": "Government"
                        },
                        {
                            "id": 27,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/27/",
                            "name": "European Space Agency",
                            "type": "Multinational"
                        },
                        {
                            "id": 37,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/37/",
                            "name": "Japan Aerospace Exploration Agency",
                            "type": "Government"
                        },
                        {
                            "id": 44,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/44/",
                            "name": "National Aeronautics and Space Administration",
                            "type": "Government"
                        },
                        {
                            "id": 63,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/63/",
                            "name": "Russian Federal Space Agency (ROSCOSMOS)",
                            "type": "Government"
                        }
                    ],
                    "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/international2_program_20201129184745.png",
                    "start_date": "1998-11-20T06:40:00Z",
                    "end_date": null,
                    "info_url": "https://www.nasa.gov/mission_pages/station/main/index.html",
                    "wiki_url": "https://en.wikipedia.org/wiki/International_Space_Station_programme",
                    "mission_patches": []
                },
                {
                    "id": 5,
                    "url": "https://lldev.thespacedevs.com/2.2.0/program/5/",
                    "name": "Commercial Crew Program",
                    "description": "The Commercial Crew Program (CCP) is a human spaceflight program operated by NASA, in association with American aerospace manufacturers Boeing and SpaceX. The program conducts rotations between the expeditions of the International Space Station program, transporting crews to and from the International Space Station (ISS) aboard Boeing Starliner and SpaceX Crew Dragon capsules, in the first crewed orbital spaceflights operated by private companies.",
                    "agencies": [
                        {
                            "id": 80,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/80/",
                            "name": "Boeing",
                            "type": "Commercial"
                        },
                        {
                            "id": 44,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/44/",
                            "name": "National Aeronautics and Space Administration",
                            "type": "Government"
                        },
                        {
                            "id": 121,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                            "name": "SpaceX",
                            "type": "Commercial"
                        }
                    ],
                    "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/commercial2520_program_20200820201209.png",
                    "start_date": "2011-04-18T00:00:00Z",
                    "end_date": null,
                    "info_url": "https://www.nasa.gov/exploration/commercial/crew/index.html",
                    "wiki_url": "https://en.wikipedia.org/wiki/Commercial_Crew_Program",
                    "mission_patches": []
                }
            ],
            "orbital_launch_attempt_count": 6136,
            "location_launch_attempt_count": 192,
            "pad_launch_attempt_count": 135,
            "agency_launch_attempt_count": 145,
            "orbital_launch_attempt_count_year": 111,
            "location_launch_attempt_count_year": 10,
            "pad_launch_attempt_count_year": 10,
            "agency_launch_attempt_count_year": 28
        },
        {
            "id": "e4200e5c-2726-43f2-8439-36bd1be59821",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/e4200e5c-2726-43f2-8439-36bd1be59821/",
            "slug": "falcon-9-block-5-starlink-group-4-1",
            "name": "Falcon 9 Block 5 | Starlink Group 4-1",
            "status": {
                "id": 3,
                "name": "Launch Successful",
                "abbrev": "Success",
                "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
            },
            "last_updated": "2022-10-24T03:01:37Z",
            "net": "2021-11-13T12:19:00Z",
            "window_end": "2021-11-13T12:19:00Z",
            "window_start": "2021-11-13T12:19:00Z",
            "probability": 80,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 121,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                "name": "SpaceX",
                "type": "Commercial"
            },
            "rocket": {
                "id": 2959,
                "configuration": {
                    "id": 164,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/164/",
                    "name": "Falcon 9",
                    "family": "Falcon",
                    "full_name": "Falcon 9 Block 5",
                    "variant": "Block 5"
                }
            },
            "mission": {
                "id": 1381,
                "name": "Starlink Group 4-1",
                "description": "A batch of 53 satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
                "launch_designator": null,
                "type": "Communications",
                "orbit": {
                    "id": 8,
                    "name": "Low Earth Orbit",
                    "abbrev": "LEO"
                }
            },
            "pad": {
                "id": 80,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/80/",
                "agency_id": 121,
                "name": "Space Launch Complex 40",
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
                "map_url": "http://maps.google.com/maps?q=28.56194122,-80.57735736",
                "latitude": "28.56194122",
                "longitude": "-80.57735736",
                "location": {
                    "id": 12,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/12/",
                    "name": "Cape Canaveral, FL, USA",
                    "country_code": "USA",
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
                    "total_launch_count": 862,
                    "total_landing_count": 24
                },
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg",
                "total_launch_count": 157,
                "orbital_launch_attempt_count": 156
            },
            "webcast_live": true,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210619160353.png",
            "infographic": null,
            "program": [],
            "orbital_launch_attempt_count": 6137,
            "location_launch_attempt_count": 827,
            "pad_launch_attempt_count": 131,
            "agency_launch_attempt_count": 146,
            "orbital_launch_attempt_count_year": 112,
            "location_launch_attempt_count_year": 16,
            "pad_launch_attempt_count_year": 14,
            "agency_launch_attempt_count_year": 29
        },
        {
            "id": "11ae4d7c-e83c-4a52-94b8-1cf79bd16d52",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/11ae4d7c-e83c-4a52-94b8-1cf79bd16d52/",
            "slug": "vega-ceres",
            "name": "Vega | CERES",
            "status": {
                "id": 3,
                "name": "Launch Successful",
                "abbrev": "Success",
                "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
            },
            "last_updated": "2022-10-24T00:35:47Z",
            "net": "2021-11-16T09:27:55Z",
            "window_end": "2021-11-16T09:27:55Z",
            "window_start": "2021-11-16T09:27:55Z",
            "probability": -1,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 115,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/115/",
                "name": "Arianespace",
                "type": "Commercial"
            },
            "rocket": {
                "id": 128,
                "configuration": {
                    "id": 167,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/167/",
                    "name": "Vega",
                    "family": "Vega",
                    "full_name": "Vega",
                    "variant": ""
                }
            },
            "mission": {
                "id": 5881,
                "name": "CERES",
                "description": "CERES (CapacitÉ de Renseignement Électromagnétique Spatiale) is a space-based signal intelligence (SIGNIT) system consisting of three satellites constellation.",
                "launch_designator": null,
                "type": "Government/Top Secret",
                "orbit": {
                    "id": 8,
                    "name": "Low Earth Orbit",
                    "abbrev": "LEO"
                }
            },
            "pad": {
                "id": 34,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/34/",
                "agency_id": 115,
                "name": "Ariane Launch Area 1",
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/ELA-1",
                "map_url": "https://www.google.com/maps/?q=5.239,-52.775",
                "latitude": "5.236",
                "longitude": "-52.775",
                "location": {
                    "id": 13,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/13/",
                    "name": "Kourou, French Guiana",
                    "country_code": "GUF",
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_13_20200803142412.jpg",
                    "total_launch_count": 315,
                    "total_landing_count": 0
                },
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_34_20200803143527.jpg",
                "total_launch_count": 47,
                "orbital_launch_attempt_count": 47
            },
            "webcast_live": true,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/vega_image_20201111143622.jpeg",
            "infographic": null,
            "program": [],
            "orbital_launch_attempt_count": 6138,
            "location_launch_attempt_count": 309,
            "pad_launch_attempt_count": 46,
            "agency_launch_attempt_count": 304,
            "orbital_launch_attempt_count_year": 113,
            "location_launch_attempt_count_year": 5,
            "pad_launch_attempt_count_year": 3,
            "agency_launch_attempt_count_year": 12
        }
    ]
}
`);
