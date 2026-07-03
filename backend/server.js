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

// ================= HIER IST DER NEUE ENDPUNKT FÜR DIE REGISTRIERUNG =================
app.post('/api/auth/register', (req, res) => {
    const { username, role, taxId, idCardNumber } = req.body;

    // 1. Grund-Check: Daten vorhanden?
    if (!username || !role) {
        return res.status(400).json({ error: "Fehlende Benutzerdaten." });
    }

    try {
        // 2. Sicherheits-Check (deine Funktion greift hier)
        verifyAndCreateAccount({ role });
        
        // 3. Rollenspezifische Prüfung für Live-Betrieb (Steuer-ID oder Personalausweis)
        if (role === 'company' && !taxId) {
            return res.status(400).json({ error: "Firmen benötigen eine Steuer-ID." });
        }
        if (role === 'user' && !idCardNumber) {
            return res.status(400).json({ error: "Nutzer benötigen eine Personalausweisnummer." });
        }

        // Erfolg melden
        res.status(201).json({ 
            success: true, 
            message: `Konto als ${role} erfolgreich angelegt.`,
            token: "xyz-geheimer-session-token"
        });
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
});
// ===================================================================================

app.listen(3000, () => console.log('ALU-Backend läuft auf Port 3000'));
