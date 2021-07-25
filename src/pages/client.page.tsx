import { Grid, makeStyles } from "@material-ui/core"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import VerticalBarGraph from "@chartiful/react-vertical-bar-graph"
import LineGraph from "@chartiful/react-line-graph"
import rn from "random-number"

interface ParamsType {
	id: string
}

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: `#dff4d7`,
		height: "100vh",
		width: "100vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}))

const ClientPage = () => {
	const { id } = useParams<ParamsType>()
	const [data, setData] = useState([0])
	const classes = useStyles()

	useEffect(() => {
		var options = {
			min: 0,
			max: 100,
			integer: true,
		}

		let d = []
		for (let i = 0; i < 8; i++) {
			d.push(rn(options))
		}

		setData(d)
	}, [id])

	return (
		<Grid container className={classes.root}>
			{id === "1" ? (
				<VerticalBarGraph
					data={data}
					labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
					barRadius={5}
					width={350}
					height={300}
					barWidthPercentage={0.65}
					barColor="#30BE76"
					baseConfig={{
						hasXAxisBackgroundLines: false,
						xAxisLabelStyle: {
							position: "left",
							prefix: "$",
						},
					}}
					style={{
						paddingVertical: 10,
					}}
				/>
			) : (
				<LineGraph
					data={data}
					width={350}
					height={300}
					lineColor="#347975"
					dotColor="#347975"
					lineWidth={3}
					isBezier
					hasDots={true}
					baseConfig={{
						startAtZero: false,
						hasXAxisBackgroundLines: false,
						xAxisLabelStyle: {
							prefix: "$",
						},
					}}
					style={{
						marginBottom: 30,
						padding: 10,
						paddingTop: 20,
						borderRadius: 20,
						width: 500,
					}}
				/>
			)}
		</Grid>
	)
}

export default ClientPage
