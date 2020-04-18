import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from "./News.module.css";
import cx from "classnames";

const News = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.container}>
      <Grid container spacing={2} justify="center">
        {data.map((article, i) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            component={Card}
            className={cx(styles.newsCard, styles.card)}
            key={i}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {new Date(article.publishedAt).toDateString()}
              </Typography>
              <Typography noWrap variant="h6" className="title">
                {article.title}
              </Typography>
              <a href={article.url}>
                {" "}
                <img
                  src={article.urlToImage}
                  alt={article.description}
                  className={styles.cardImage}
                />
              </a>
              {article.author ? (
                <Typography color="textSecondary">
                  Article by: {article.author}
                </Typography>
              ) : (
                <Typography color="textSecondary">Author Unknown</Typography>
              )}

              <Typography variant="subtitle2" className="title">
                {article.description}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default News;
