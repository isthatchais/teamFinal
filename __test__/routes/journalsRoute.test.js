const request = require('supertest');
const app = require('../../app'); 

describe('Test journalsRoute', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/journals');
    expect(response.statusCode).toBe(200);
  });

  // Añade más pruebas para POST, PUT, DELETE, etc.
  describe('POST /journals', () => {
    it('should create a new journal and return 201 status', async () => {
      const newJournal = {
        firstName: 'John',
        lastName: 'Doe'
        // Añade el resto de campos requeridos según tu modelo
      };

      const response = await request(app).post('/journals').send(newJournal);

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('_id'); // Asegúrate de que la respuesta incluya un ID, indicando creación exitosa
      // Puedes añadir más expectativas según sea necesario
    });
  });

describe('PUT /journals/:id', () => {
  it('should update an existing journal and return 204 status', async () => {
    const journalUpdate = {
      firstName: 'Jane'
      // Añade otros campos que desees actualizar
    };
    const journalId = 'id_del_journal_existente'; // Asegúrate de tener un ID válido de un journal existente

    const response = await request(app).put(`/journals/${journalId}`).send(journalUpdate);

    expect(response.statusCode).toBe(204); // 204 No Content es comúnmente usado para respuestas PUT exitosas
  });
});

describe('DELETE /journals/:id', () => {
  it('should delete an existing journal and return 200 status', async () => {
    const journalId = 'id_del_journal_a_eliminar'; // Asegúrate de tener un ID válido

    const response = await request(app).delete(`/journals/${journalId}`);

    expect(response.statusCode).toBe(200); // Asegúrate de que tu controlador envíe un 200 al eliminar
  });
});

});
