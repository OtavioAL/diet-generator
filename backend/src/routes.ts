import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/", (_request: FastifyRequest, reply: FastifyReply) => {
    const responseText =
      '```json\n{\n  "nome": "Otavio",\n  "sexo": "Masculino",\n  "idade": 23,\n  "altura": 1.80,\n  "peso": 75,\n  "objetivo": "Hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Café da Manhã",\n      "alimentos": [\n        "2 fatias de pão integral",\n        "2 ovos mexidos",\n        "1 banana",\n        "200ml de leite desnatado"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da Manhã",\n        "alimentos": [\n        "1 iogurte grego com granola"\n      ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis cozido",\n        "Salada verde a vontade"\n      ]\n    },\n    {\n      "horario": "16:00",\n      "nome": "Lanche da Tarde",\n      "alimentos": [\n        "1 batata doce média",\n        "1 scoop de whey protein"\n      ]\n    },\n    {\n      "horario": "20:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de carne vermelha magra",\n        "1 xícara de batata doce cozida",\n        "1 xícara de espinafre cozido"\n      ]\n    },\n    {\n      "horario": "22:00",\n      "nome": "Lanche antes de Dormir",\n        "alimentos": [\n        "Caseína"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Whey Protein",\n    "Creatina",\n    "BCAA",\n    "Glutamina"\n  ]\n}\n```';

    try {
      const jsonString = responseText
        .replace(/```\w*\n/g, "")
        .replace(/\n```/g, "")
        .trim();

      const jsonObject = JSON.parse(jsonString);

      return reply.send(jsonObject);
    } catch (error) {
      console.log("Error", error);
    }

    reply.send({ ok: true });
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply);
    }
  );
}
