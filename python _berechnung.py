import pandas as pd
import numpy as np

# Manuell eingetragene Werte für die drei Datensätze
data = {
    'A': {
        'FCP': [0.2]*10,
        'LCP': [1.2, 2.2, 1.3, 1.3, 1.2, 1.3, 2.2, 1.2, 2.3, 1.4],
        'SI':  [0.4, 0.3, 0.4, 0.4, 0.4, 0.3, 0.3, 0.4, 0.5, 0.3]
    },
    'B': {
        'FCP': [0.5]*10,
        'LCP': [1.4, 1.5, 1.3, 1.3, 1.3, 1.4, 1.5, 1.2, 1.2, 2.6],
        'SI':  [0.6, 0.6, 0.5, 0.5, 0.5, 0.5, 0.6, 0.6, 0.6, 1.0]
    },
    'C': {
        'FCP': [0.6]*10,
        'LCP': [2.3, 2.5, 1.5, 2.4, 2.4, 2.5, 2.5, 2.5, 2.4, 2.5],
        'SI':  [0.6]*10
    }
}

# Leere Liste für die Zusammenfassung
summary = []

# Berechne für jeden Datensatz und jede Metrik die Kennzahlen
for label, metrics in data.items():
    for metric, values in metrics.items():
        arr = np.array(values)
        summary.append({
            'Datensatz':     label,
            'Metrik':        metric,
            'Mittelwert':    np.mean(arr),
            'Median':        np.median(arr),
            'Std_Abw (n-1)': np.std(arr, ddof=1)
        })

# Zusammenfassung in ein DataFrame
df_summary = pd.DataFrame(summary)

print(df_summary)
