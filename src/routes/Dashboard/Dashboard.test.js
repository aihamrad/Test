 import 'regenerator-runtime/runtime'
 
async function withFetch() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json()
  
    return json
  }
  
  // This is the section where we mock `fetch`
  const unmockedFetch = global.fetch
  
  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
  })
  
  afterAll(() => {
    global.fetch = unmockedFetch
  })
  
  // This is actual testing suite
  describe('withFetch', () => {
    test('works', async () => {
      const json = await withFetch()
      expect(Array.isArray(json)).toEqual(true)
      expect(json.length).toEqual(0)
    })
  })