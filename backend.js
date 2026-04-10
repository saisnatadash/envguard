app.get('/api/health', async (req, res) => {
  try {
    res.send('OK');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});