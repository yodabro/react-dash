import React from 'react';
import {
	SparklineComponent,
	Inject,
	SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

// const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {

class SparkLine extends React.PureComponent {
	render() {
		const { id, height, width, color, data, type, currentColor } = this.props;

		return (
			<SparklineComponent
				id={id}
				height={height}
				width={width}
				lineWidth={1}
				valueType="Numeric"
				fill={color}
				border={{ color: currentColor, width: 2 }}
				tooltipSettings={{
					visible: true,
					// eslint-disable-next-line no-template-curly-in-string
					format: '${x} : data ${yval}',
					trackLineSettings: {
						visible: true,
					},
				}}
				markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
				dataSources={data} //deleted "S" in "Sources"
				xName="x" // console error can't find 'X' check documentation to see how to fix chart and make it visible
				yName="yval"
				type={type}
			>
				<Inject services={[SparklineTooltip]} />
			</SparklineComponent>
		);
	}
}

export default SparkLine;
