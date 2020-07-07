# ⚛️ Learn useMemo in 10 Minutes

▶️ [Learn useMemo In 10 Minutes - YouTube](https://www.youtube.com/watch?v=THL1OPn72vo)

[How To Use Memoization To Drastically Increase React Performance | Web Dev Simplified Blog](https://blog.webdevsimplified.com/2020-05/memoization-in-react/)

## useMemo ユースケース

- slowFunctionに対して使用
- Referential Equality確保する為
  - オブジェクト・配列が新定義される = 新参照先生成

### useMemo & useCallback 違い

> useCallback : 関数を返す
> 
> useMemo : 結果を返す


```javascript
useCallback(() => {
  return a + b
}, [a, b])

useMemo(() => {
  return () => a + b
}, [a, b])

```
