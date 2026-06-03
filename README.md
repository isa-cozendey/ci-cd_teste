# Pipeline de CI/CD

1. **Aplicação e Teste Real:** Criada uma função matemática simples (`index.js`) acompanhada de um script de teste nativo (`index.test.js`) que valida o comportamento do código sem dependências externas pesadas.
2. **Estratégia de Matriz (Matrix Strategy):** O pipeline do GitHub Actions foi configurado para rodar os testes simultaneamente em três versões diferentes do Node.js (18.x, 20.x e 22.x), garantindo a retrocompatibilidade.
3. **Cachamento de Dependências:** Adicionado `cache: 'npm'` no setup do Node para agilizar o tempo de execução do workflow.
4. **Deploy Condicional Seguro:** O job de deploy possui uma trava de segurança (`needs: test-and-build`). Se o teste falhar em qualquer uma das versões do Node.js, o deploy é automaticamente cancelado e o time é alertado.

##  Como testar
Para ver a automação protegendo o ambiente de produção:
1. Altere o arquivo `index.js` para retornar `a - b` em vez de `a + b`.
2. Faça o `push` para a branch `main`.
3. Vá na aba **Actions**: você verá o job de teste falhar (ficar vermelho) e o job de deploy ser bloqueado.
