module.exports = {
   apps: [{
      name: "The-Gresik-Times",
      script: "./app.js",
      env: {
         PORT: 80,
         NODE_ENV: 'production',
         DATABASE_URL: 'postgresql://postgres:m090909OQwerty@db.fnvbfdupiuhmbntociqc.supabase.co:5432/postgres'
      }
   }]
}