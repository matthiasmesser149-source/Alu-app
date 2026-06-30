const express = require('express');
const app = express();
app.use(express.json());

// B2B-Sperre für Behörden (Polizei/Feuerwehr bleiben unantastbar)
function verifyAndCreateAccount(accountData) {
    if (accountData.role === "POLIZEI" || accountData.role === "FEUERWEHR") {
        throw new Error("B2B-Verifizierung erforderlich. Zugriff verweigert.");
    }
    return { success: true, message: "Konto erfolgreich erstellt." };
}

// API-Endpunkt für aktive Pins auf der Karte
app.get('/api/bounties/aktive-pins', (req, res) => {
    res.json([
        {
            _id: "1",
            type: "Aushilfe",
            coordinates: { lat: 50.115, lng: 8.685 },
            title: "Zementsäcke schleppen",
            description: "Brauchen Power für den 5. Stock!",
            helpersNeeded: 7,
            helpersJoined: 2
        }
    ]);
});

app.listen(3000, () => console.log('ALU-Backend läuft auf Port 3000'));

