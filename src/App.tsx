import React, { useState, useCallback, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getConnections } from "connection";
import { useWeb3React } from "@web3-react/core";
import { useAppDispatch } from "state/hooks";
import { updateSelectedWallet } from "state/user/reducer";

function App() {
	const connections = getConnections();
	const { chainId, account } = useWeb3React();
	const dispatch = useAppDispatch();

	console.log({ chainId, account });
	return (
		<>
			<div>hello</div>
			{connections.map((item) => {
				return (
					<>
						<button
							style={{ marginBottom: "10px" }}
							onClick={() => {
								item.connector.activate();
								dispatch(updateSelectedWallet({ wallet: item?.type }));
							}}
						>
							{item.getName()}
						</button>
					</>
				);
			})}
		</>
	);
}

export default App;
