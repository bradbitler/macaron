import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Image generation
export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					background: "linear-gradient(to right, #c084fc, #ef4444)",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<div
					style={{
						padding: "100px",
						borderRadius: "25px",
						margin: "20px",
						backgroundColor: "black",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 0 50px 0 rgba(0,0,0,0.5)",
					}}
				>
					<div
						style={{
							color: "white",
							fontSize: 64,
                            display: "flex",
                            fontWeight: "bold",
						}}
					>
						Brad Bitler
					</div>
					<div
						style={{
							color: "white",
							fontSize: 48,
                            display: "flex",
						}}
					>
						Product Designer at Apple
					</div>
				</div>
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			...size,
		}
	);
}
