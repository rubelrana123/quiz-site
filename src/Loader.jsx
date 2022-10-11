export const loadedTopicData = async () => {
  const topics = await fetch ('https://openapi.programming-hero.com/api/quiz');
  return topics;
}