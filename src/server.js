const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('TGB Backend Running');
});

app.post('/api/calculate', (req, res) => {
  const { sqft, material } = req.body;
  const pricePerSqft = material === 'composite' ? 9 : 3;
  const cost = sqft * pricePerSqft;

  res.json({
    sqft,
    material,
    estimatedCost: cost
  });
});

app.post('/api/lead', (req, res) => {
  console.log('New Lead:', req.body);
  res.json({ success: true });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
