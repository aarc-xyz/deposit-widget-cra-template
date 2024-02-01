import logo from './logo.svg';
import './App.css';
import { useAarc, AarcProvider } from '@aarc-xyz/deposit-widget';
import '@aarc-xyz/deposit-widget/dist/style.css';
function App() {

  const open = useAarc();

  const config = {
    destination: {
      chainId: 137,
      tokenAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      walletAddress: "0x7C1a357e76E0D118bB9E2aCB3Ec4789922f3e050",
      tokenSymbol: "USDC",
      tokenDecimals: 6,
    },
    appearance: {
      logoUrl: logo,
      themeColor: "#1677FF",
    },
    apiKeys: {
      transak: "your-transak-api-key",
      aarcSDK: "your-aarc-sdk-api-key",
    }
  }

  return (
    <div className="App">
      <h1>Create React App Template for Aarc Deposit widget</h1>
      <AarcProvider config={config}>
        <button onClick={() => open()}>Deposit</button>
      </AarcProvider>
    </div>
  );
}

export default App;
