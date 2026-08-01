# Arquitectura

`pixel-art-ui` es una librería UX, no un cliente MCP. Su frontera termina en componentes y tokens presentacionales.

```text
contracts/tokens → componentes pequeños → aplicación consumidora
```

No contiene persistencia, controladores HTTP ni nombres concretos de Aseprite. `asset-studio` decide cómo conectar los eventos de los componentes con sus casos de uso.

## Mejoras previstas

1. separar cada componente en su propio módulo;
2. extraer contratos visuales reutilizables;
3. añadir navegación por teclado, alto contraste y reduced motion;
4. publicar ESM + declaraciones TypeScript;
5. añadir pruebas de interacción y regresión visual.
