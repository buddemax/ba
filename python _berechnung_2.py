import pandas as pd
import numpy as np

# Manuell eingetragene Werte für die drei Frameworks
data = {
    'React': {
        'TotalBlockingTime_ms': [100, 110, 100, 110, 110, 100, 90, 100, 90, 100],
        'CumulativeLayoutShift': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'InteractionToNextPaint_ms': [100, 110, 90, 100, 100, 90, 100, 100, 70, 90]
    },
    'Angular': {
        'TotalBlockingTime_ms': [120, 110, 110, 120, 130, 110, 110, 120, 120, 130],
        'CumulativeLayoutShift': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'InteractionToNextPaint_ms': [70, 70, 80, 70, 60, 60, 70, 80, 80, 80]
    },
    'Vue': {
        'TotalBlockingTime_ms': [40, 90, 40, 0, 30, 10, 10, 60, 10, 20],
        'CumulativeLayoutShift': [0.117, 0.117, 0.0, 0.0, 0.0, 0.0, 0.0, 0.137, 0.0, 0.0],
        'InteractionToNextPaint_ms': [80, 70, 80, 80, 70, 80, 80, 80, 70, 80]
    }
}

# Leere Liste für die Zusammenfassung
summary = []

# Berechne für jedes Framework und jede Metrik Mittelwert und Median
for framework, metrics in data.items():
    for metric, values in metrics.items():
        arr = np.array(values, dtype=float)
        summary.append({
            'Framework': framework,
            'Metrik': metric,
            'Mittelwert': np.mean(arr),
            'Median': np.median(arr)
        })

# Zusammenfassung in ein DataFrame
df_summary = pd.DataFrame(summary)

print(df_summary)
