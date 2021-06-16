import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { Container, Grid, Typography} from "@material-ui/core"

import About from "../components/company/About"
import PageTemplate from "../components/layouts/PageTemplate"
import theme from "../components/utils/theme"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem"
  }
}))

interface About {
  name: string
  birthday: string
  skill: string
  address: string
  mail: string
}

const Company: React.FC = () => {
  const classes = useStyles()

  const about: About = {
    name: "Asano Kenta",
    birthday: "1998/03/13",
    skill: "React,ReactNative,Next.js,Javascript,Typescript,Node,GraphQL,HTML,CSS,SASS,AWS(serverlessarchitecture)",
    address: "Tokyo",
    mail: "asanokenta@me.com"
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="About">
          <>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container justify="center">
                <Grid item>
                  <Typography variant="h1" gutterBottom>
                    About
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
              <About
                name={about.name}
                birthday={about.birthday}
                skill={about.skill}
                address={about.address}
                mail={about.mail}
              />
            </Container>
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  )
}

export default Company