import { FC, memo } from "react";
import styles from "./geo-map.module.scss";
import { GeoPin, GeoPinProps } from "@core/components/geopin/geopin";
import { GeoMap } from "@core/components/geomap/geomap";
import { Card } from "@core/components/card/card";
import { Box, Button, Divider, ProgressBar } from "react-untitled-ui";
import { availableCountries } from "@config/countries";

export type DashboardMapProps = {}

const data: GeoPinProps[] = [
    {
        title: "Melbourne, AUS",
        content: "100 Smith Street Collingwood VIC 3066 AU",
        x: "86%",
        y: "82%",
    },
    {
        title: "Moscow, RUS",
        x: "56%",
        y: "26%",
    },
    {
        title: "London, UK",
        x: "45.5%",
        y: "27.75%",
    },
    {
        title: "New York, US",
        x: "26.8%",
        y: "36%",
    },
]

export const DashboardMap: FC<DashboardMapProps> = memo(() => {
    return <Card className={ styles.card }>
        <Box justifyContent="space-between" gap="10px" w="100%">
            <h2>Active users right now</h2>
            <Button variant="secondary-gray">Real-time report</Button>
        </Box>
        <Divider/>
        <Box gap="40px" w="100%">
            <GeoMap className={ styles.map } width="100%">
                {
                    data.map(pin => <GeoPin { ...pin }/>)
                }
            </GeoMap>
            <Box direction="column">
                <h3 className={ styles.number }>10.8k</h3>
                <div className={ styles.countryList }>
                    {
                        availableCountries.map((country, i) => {
                            return <div className={ styles.item }>
                                { country.icon }
                                <ProgressBar
                                    className={ styles.progressBar }
                                    progress={ 1 - i * 0.2 }
                                    label={ country.label }/>
                            </div>
                        })
                    }
          x      </div>
            </Box>
        </Box>
    </Card>
})