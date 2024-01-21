if(process.env.NODE_ENV === 'development') require('dotenv').config()
import app from './src';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

