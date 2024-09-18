import TonConnect, { toUserFriendlyAddress } from "@tonconnect/sdk";
import QRCode from "qrcode";

const connector = new TonConnect({
  manifestUrl: "https://tonkatest.netlify.app/assets/tonconnect-manifest.json",
});

// const connector = new TonConnect();

export const connectDirect = async (data) => {
  try {
    const walletConnectionSource = {
      jsBridgeKey: data?.jsBridgeKey,
    };
    await connector.connect(walletConnectionSource);
    // Set up the status change listener
    const walletAddress = await new Promise((resolve, reject) => {
      connector.onStatusChange(async (status) => {
        try {
          const address = await handleStatusChange(status);
          resolve(address);
        } catch (err) {
          reject(err);
        }
      });
    });
    return walletAddress;
  } catch (err) {
    console.log(err);
  }
};

export const connectWithQr = async (data) => {
  try {
    // QR code
    const walletConnectionSource = {
      universalLink: data?.universalLink,
      bridgeUrl: data?.bridgeUrl,
    };
    const universalLink = await connector.connect(walletConnectionSource);
    // Generate QR code
    const qrCodeDataUrl = await QRCode.toDataURL(universalLink);
    // Display QR code (in this example, we're creating an img element)
    // const qrCodeImg = document.createElement('img');
    // qrCodeImg.src = qrCodeDataUrl;
    // document.body.appendChild(qrCodeImg);

    // You might also want to display the universal link as text for mobile users
    // const linkElement = document.createElement('a');
    // linkElement.href = universalLink;
    // linkElement.textContent = 'Open Wallet App';
    // document.body.appendChild(linkElement);
    // Set up the status change listener
    connector.onStatusChange(handleStatusChange);
    return qrCodeDataUrl;
  } catch (err) {
    console.log(err);
  }
};

// Function to handle status changes
async function handleStatusChange(status) {
  const rawAddress = await status.account.address;
  console.log(rawAddress);
  if (rawAddress) {
    const bouncableUserFriendlyAddress = toUserFriendlyAddress(rawAddress);

    console.log("Wallet connected successfully!");
    console.log("Wallet info:", bouncableUserFriendlyAddress);
    return bouncableUserFriendlyAddress;
  } else {
    console.log("Wallet disconnected");
    // Handle disconnection if needed
  }
}

export const walletList = async () => {
  try {
    const walletsList = await connector.getWallets();
    return walletsList;
  } catch (err) {}
};
