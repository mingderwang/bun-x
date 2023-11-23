// @ts-ignore
import { test, expect } from 'bun:test';
import axios from 'axios';

test('strapi login', async () => {
      const request = await axios
      .post('http://127.0.0.1:1337/api/auth/local',       {
         identifier: "asdf@asdf.com",
         password: "12345678"
      },
      {
        headers: {
            'Content-Type': 'application/json',
        }
      })
        expect(request.data.user.username).toBe('asdfasdf');
      });


