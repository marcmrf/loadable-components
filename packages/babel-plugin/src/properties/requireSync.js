function buildProperty({ types: t }, implementation) {
  return t.objectMethod(
    'method',
    t.identifier('requireSync'),
    [t.identifier('props')],
    t.blockStatement(implementation),
  )
}

export function requireSyncProperty(api) {
  const { template } = api;
  const implementation = template.ast(`
    const id = this.resolve(props)

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id)
    }

    return eval('module.require')(id)
  `)

  return () => {
    return buildProperty(api, implementation)
  }
}


export function requireSyncPropertyEsm(api) {
  const { template } = api
  // TODO: use target
  const implementation = template.ast(`
      const isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
      const id = this.resolve(props)

      if (isNode) {
          const module = __non_webpack_require__(id)

          if (module.__esModule) {
              return module
          }

          return { __esModule: true, default: module }
      }

      // throw error or invariant
  `)

  return () => {
    return buildProperty(api, implementation)
  };
}