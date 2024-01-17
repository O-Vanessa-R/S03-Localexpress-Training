export default function groupByKey<T, K extends keyof T>(arr: T[], key: K) {
    // Range par groupes
    let sorted = arr.reduce((groups, current) => ({
      ...groups,
      [String(current[key])]: [...(groups[String(current[key])] || []), current]
    }),
    {} as Record<string, T[]>)
  
    // Tri le tableau par ordre alphabétique
    sorted = Object.keys(sorted).sort().reduce((acc, key) => ({
      ...acc, [key]: sorted[key]
    }), {} as Record<string, T[]>)
  
    return sorted;
  }