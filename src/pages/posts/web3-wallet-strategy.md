---
title: "Web3 wallet safety: how not to get rekt"
publishDate: "2021-12-01"
published: true
layout: "../../layouts/BlogPost.astro"
description: "Create a web3 wallet strategy to keep your crypto assets safe."
category: "web3"
tags:
  - "crypto"
---

And like that it happened: I got rekt.

Or as folks new to the web3 might say "I got hacked". Long story short, I connected my crypto wallet to a malicious dApp, handed over my seed phrase and ended up having someone steal all of my assets. Then, it happened again (more on this later).

This type of experience is considered a rite of passage in crypto right now, which is unfortunate. These things happen largely due to a lack of understanding about how accounts and wallets work on the blockchain. This is a real risk for users and a barrier to entry for those without disposal income.

Let my tale be a cautionary one and learn from my mistakes. Below are my primary takeaways from my post-rekt research.

### Don't give away seed phrase (or private key)

When you set up you crypto wallet, a list of words (i.e. a "seed phrase") is generated. This acts as your access to your crypto wallet and, in turn, gives you the ability to manage your accounts. It is also used to generate the private key for your accounts.

All this to say: **do not give anyone your seed phrase!**

### Wallets and accounts

Accounts on the blockchain each have their own unique address and are comprised of a cryptographic keypair. Software wallets like MetaMask and Rainbow allow users to interact with their blockchain accounts and authorize transactions.

For each account, a private key is created that is then used to generate an associated public key. The account address is then derived from the public key and acts as an idenfitier for the account.

It's okay if that didn't make sense. Just remember accounts and addresses **are not** the same thing.

### Custodial vs. non-custodial wallets

Accounts are comprised of a public/private keypair, the latter of which needs to be kept secret. Who bears that responsibility is the difference between custodial and non-custodial wallets.

With a custodial wallet like Coinbase (or any other centralized exchance), that company both creates the blockchain account on your behalf _and_ manages the associated keys. While this is easier for the user, it means you don't have full control over the account and are trusting a third party to store your credentials.

On the flip-side, with non-custodial wallets you need to manage the public/private keys yourself. This gives you full control over the account but comes at the price of additional responsibility. If you lose the private key or seed phrase, **you will not be able to access your assets**. The blockchain is decentralized and nobody can recover them for you.

### Hardware wallets

Since the account's private key is used to sign transactions (i.e. autorize purchases, asset transfers, etc.), keeping it safe is the name of the game.

For mobile and browser wallets, the keys are stored on a given device. This helps with user experience because the software can easily retrieve the private key when needed to sign a transaction. However, this also adds an attack vector as the keys are being stored on an internet enabled device.

Hardware wallets take a different approach and store your private key on a **completely separate device** like a USB drive. Often, they're airgapped and do not have any internet, Bluetooth or NFC connection to make them more secure. Each has an authentication mechanism (like scanning a QR code) that allows you to fetch the private key via a mobile app in order to sign transactions. Because of this extra step, an attacker would need to gain access to both your phone and hardware wallet in order to make malicious transactions.

### Pro-tips

1. **Use a burner**
   When interacting with a dApp for something like minting a NFT, use a secondary wallet/account. Keep your primary assets in an account you keep separate, preferably a hardware wallet. This way, if a malicious app gains access to your wallet you don't have to worry about your main holdings.

2. **Consider a contract wallet**
   Wallets like Argent manage your assets in a smart contract, not a regular blockchain account. This allows for them to build additional functionality like multi-factor authentication for signing transactions via text and/or email, as well as recovery options for when you lose your seed phrase. This can be **huge** as many seed phrase-less folks can testify.

### Bonus: How I got hacked a second time

One of the most widely used web3 wallets is MetaMask. Within the wallet, you can create multiple accounts each with their own unique address. While they may seem fully isolated, **they are not**.

Behind the scenes, MetaMask uses **the same private key** to generate new public keys and address for each account it manages. At the time, I did not know this so when I moved funds from Account 1 to Account 2, I didn't realize the hacker would have access to that too.

Talk about salt in the wound 😅
