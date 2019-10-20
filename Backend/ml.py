import pandas as pd
import numpy as np
import impyute as impy


def imputeValues(filename):
    dataset = pd.DataFrame()
    dataset2 = pd.DataFrame()

    df = pd.read_csv(filename)

    for i in df.columns:
        if df[i].dtype == np.float64 or df[i].dtype == np.int64:
            dataset[i] = df[i]

    dataset2 = impy.mean(dataset)
    dataset2.columns = dataset.columns

    for j in df.columns:
        if j in dataset2.columns:
            df[j] = dataset2[j]

    df.to_csv("../Frontend/comets_final.csv", index=False)
    return df
