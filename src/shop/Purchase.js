import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductImage from "../asset/img/product_freestyle.webp";
import ProductTip1 from "../asset/img/product_freestyle_tip1.webp";
import ProductTip2 from "../asset/img/product_freestyle_tip2.jpeg";
import ProductTip3 from "../asset/img/product_freestyle_tip3.webm";
import ProductTip4 from "../asset/img/product_freestyle_tip4.webm";

import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  IconButton,
  Radio,
} from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

function Error() {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const openPurchaseDialog = () => {
    setIsPurchaseDialogOpen(true);
  };

  const closePurchaseDialog = () => {
    if (!isLoading) setIsPurchaseDialogOpen(false);
  };

  const onSetPurchseProduct = () => {
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
      setIsPurchased(true);
    }, [2000]);
  };

  const toExperiencePage = () => {
    navigate("/experience?needReload=true");
  };

  const blackOutlinedButtonSx = {
    color: "black",
    px: 2,
    py: 0.75,
    border: "2px solid black",
    borderRadius: "100px",
    fontWeight: 700,
    letterSpacing: "-1px",
    minWidth: "100px",
  };

  const blackContainedButtonSx = {
    backgroundColor: "black",
    color: "white",
    px: 2,
    py: 0.75,
    border: "2px solid black",
    borderRadius: "100px",
    fontWeight: 700,
    letterSpacing: "-1px",
    minWidth: "100px",
  };

  const productName = "The Freestyle";
  const productModelId = "SP-FBB3BA";
  const productMarketPrice = "1,190,000";
  const productMemberPrice = "1,118,000";
  const productBenefitPrice = "990,000";

  return (
    <Container
      id="purchase_page"
      maxWidth="false"
      sx={{
        py: 10,
        letterSpacing: "-1px",
        maxWidth: "1400px",
        justifyContent: "center",
      }}
    >
      <Grid container>
        <Grid item sx={{ p: 3 }}>
          <img
            src={ProductImage}
            style={{ maxWidth: "750px", width: "100%" }}
          />
        </Grid>

        <Grid
          item
          sx={{ p: 4, backgroundColor: "#ffffff", borderRadius: "20px" }}
        >
          <Grid sx={{ mb: 5 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <span
                style={{
                  color: "var(--samBlue)",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                ????????????
              </span>
              <Grid>
                <IconButton>
                  <ShareOutlinedIcon />
                </IconButton>
                <IconButton onClick={() => setIsFavorite(!isFavorite)}>
                  {isFavorite ? (
                    <FavoriteIcon sx={{ fill: "red" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </Grid>
            </Grid>
            <Grid>
              <span style={{ fontWeight: 900, fontSize: "24px" }}>
                {productName}
              </span>
            </Grid>
            <Grid>
              <span style={{ fontSize: "14px", color: "var(--textSub)" }}>
                {productModelId}
              </span>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <StarIcon
                  fontSize="small"
                  sx={{ color: "var(--starYellow)" }}
                />
                <StarIcon
                  fontSize="small"
                  sx={{ color: "var(--starYellow)" }}
                />
                <StarIcon
                  fontSize="small"
                  sx={{ color: "var(--starYellow)" }}
                />
                <StarIcon
                  fontSize="small"
                  sx={{ color: "var(--starYellow)" }}
                />
                <StarIcon
                  fontSize="small"
                  sx={{ color: "var(--starYellow)" }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    marginLeft: "4px",
                    marginTop: "2px",
                    fontSize: "14px",
                  }}
                >
                  5.0
                </span>
                <span
                  style={{
                    marginLeft: "8px",
                    marginTop: "2px",
                    fontSize: "14px",
                    color: "var(--textSub)",
                    textDecoration: "underline",
                  }}
                >
                  35???
                </span>
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <EditOutlinedIcon fontSize="small" />
                <span
                  style={{
                    marginLeft: "4px",
                    marginTop: "2px",
                    fontSize: "14px",
                    color: "var(--textSub)",
                    textDecoration: "underline",
                  }}
                >
                  ????????? ??????
                </span>
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ mb: 1 }}>
            <Grid
              container
              justifyContent="space-between"
              sx={{ fontSize: "15px", color: "var(--textSub)", mb: 0.5 }}
            >
              <span>?????????</span>
              <span>{productMarketPrice + "???"}</span>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              sx={{ fontSize: "15px", color: "var(--textSub)", mb: 0.5 }}
            >
              <span>?????????</span>
              <span>{productMemberPrice + "???"}</span>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center">
              <span style={{ fontSize: "15px" }}>?????????</span>
              <Grid>
                <span style={{ fontSize: "20px", fontWeight: 900 }}>
                  {productBenefitPrice}
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700 }}>???</span>
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ backgroundColor: "#f7f7f7", p: 2, borderRadius: "10px" }}>
            <Grid container alignItems="center" sx={{ mb: 3 }}>
              <Grid item xs={4}>
                <span style={{ fontSize: "14px" }}>??????</span>
              </Grid>
              <Grid item xs={8} sx={{ display: "flex" }} alignItems="center">
                <Radio size="small" sx={{ p: 0, mr: 1 }} />
                <Grid>
                  <span style={{ fontSize: "14px", fontWeight: 700 }}>
                    ?????????
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <span style={{ fontSize: "14px" }}>??????</span>
              </Grid>
              <Grid item xs={8}>
                <Grid
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    border: "1px solid darkgray",
                    width: "78px",
                    display: "flex",
                  }}
                >
                  <Grid sx={{ width: "26px", textAlign: "center", pt: 0.5 }}>
                    -
                  </Grid>
                  <Grid
                    sx={{
                      width: "26px",
                      textAlign: "center",
                      borderLeft: "1px solid darkgray",
                      borderRight: "1px solid darkgray",
                      pt: 0.5,
                    }}
                  >
                    1
                  </Grid>
                  <Grid sx={{ width: "26px", textAlign: "center", pt: 0.5 }}>
                    +
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ py: 1.5 }}
            >
              <Grid style={{ fontSize: "11px", color: "var(--textSub)" }}>
                <span>?????? ?????????</span>
                <span style={{ fontWeight: 700, marginLeft: "4px" }}>
                  42,220 ?????????
                </span>
                <span style={{ marginLeft: "4px" }}>??????</span>
              </Grid>
              <KeyboardArrowDownIcon fontSize="small" />
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent="space-between"
            sx={{
              py: 2.5,
              borderTop: "1px solid lightgray",
              borderBottom: "1px solid lightgray",
              alignItems: "center",
            }}
          >
            <Grid>
              <span style={{ fontSize: "14px", fontWeight: 700 }}>?????????</span>
            </Grid>
            <Grid>
              <span style={{ fontSize: "22px", fontWeight: 900 }}>
                {productBenefitPrice}
              </span>
              <span style={{ fontSize: "14px", fontWeight: 700 }}>???</span>
            </Grid>
          </Grid>

          <Grid container columnSpacing={1} sx={{ py: 2.5 }}>
            <Grid item sx={4}>
              <Button
                startIcon={<CardGiftcardIcon sx={{ mr: -1, ml: 0.5 }} />}
                sx={blackOutlinedButtonSx}
              >
                ????????????
              </Button>
            </Grid>
            <Grid item sx={4}>
              <Button sx={blackOutlinedButtonSx}>????????????</Button>
            </Grid>
            <Grid item sx={4}>
              <Button
                className="hoverBackTextSub"
                sx={blackContainedButtonSx}
                onClick={openPurchaseDialog}
              >
                ????????????
              </Button>
              <Dialog open={isPurchaseDialogOpen} onClose={closePurchaseDialog}>
                <DialogTitle>
                  {isPurchased ? (
                    <span style={{ fontWeight: 900 }}>
                      ???????????? The Freestyle???
                      <br />
                      ????????? ????????? ?????????????????????. <br />
                      ?????? ?????????????????????????
                    </span>
                  ) : (
                    <span style={{ fontWeight: 900 }}>??????/??????</span>
                  )}
                </DialogTitle>
                <DialogContent>
                  <Grid>
                    <Grid sx={{ mb: 1 }}>
                      <span
                        style={{ fontWeight: 700, color: "var(--textSub)" }}
                      >
                        {isPurchased ? "" : "????????????"}
                      </span>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        pt: 2,
                        mb: 4,
                        borderTop: "1px solid lightgray",
                        borderBottom: "1px solid lightgray",
                      }}
                    >
                      {isLoading ? (
                        <Grid sx={{ px: 25, py: 5, textAlign: "center" }}>
                          <CircularProgress />
                          <Grid sx={{ textAlign: "center", pt: 1 }}>
                            <span
                              style={{
                                fontWeight: 700,
                                fontSize: "18px",
                                color: "var(--samBlue)",
                              }}
                            >
                              ??????????????????.
                            </span>
                            <br />
                            <span style={{ fontSize: "12px" }}>
                              ????????? ??????????????????.
                            </span>
                          </Grid>
                        </Grid>
                      ) : isPurchased ? (
                        <Grid sx={{ minWidth: "400px", textAlign: "center" }}>
                          <img src={ProductImage} style={{ width: "200px" }} />
                        </Grid>
                      ) : (
                        <>
                          <img src={ProductImage} style={{ width: "200px" }} />
                          <Grid sx={{ p: 2, width: "300px" }}>
                            <Grid>
                              <span
                                style={{ fontWeight: 700, fontSize: "20px" }}
                              >
                                {productName}
                              </span>
                              <br />
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "var(--textSub)",
                                }}
                              >
                                {productModelId}
                              </span>
                            </Grid>
                            <Grid
                              container
                              justifyContent="space-between"
                              sx={{ pt: 2, fontSize: "14px" }}
                            >
                              <span>?????? ???</span>
                              <span>1???</span>
                            </Grid>
                            <Grid
                              container
                              justifyContent="space-between"
                              alignItems="center"
                              sx={{ pt: 0.5 }}
                            >
                              <span
                                style={{ fontSize: "14px", fontWeight: 700 }}
                              >
                                ?????? ?????? ??????
                              </span>
                              <Grid>
                                <span
                                  style={{ fontSize: "20px", fontWeight: 700 }}
                                >
                                  {productBenefitPrice}
                                </span>
                                <span
                                  style={{ fontSize: "14px", fontWeight: 700 }}
                                >
                                  ???
                                </span>
                              </Grid>
                            </Grid>
                          </Grid>
                        </>
                      )}
                    </Grid>

                    <Grid container justifyContent="center" sx={{ mb: 2 }}>
                      {isPurchased ? (
                        <>
                          <Button
                            className="hoverBackTextSub"
                            sx={{ ...blackContainedButtonSx, mr: 2 }}
                            onClick={toExperiencePage}
                          >
                            ????????????
                          </Button>
                          <Button
                            sx={blackOutlinedButtonSx}
                            onClick={closePurchaseDialog}
                          >
                            ????????????
                          </Button>
                        </>
                      ) : (
                        <Button
                          className="hoverBlueNegative"
                          disabled={isLoading}
                          sx={{
                            px: 5,
                            backgroundColor: isLoading
                              ? "lightGray"
                              : "var(--samBlue)",
                            border: "1px solid var(--samBlue)",
                            borderRadius: "100px",
                            color: "white",
                          }}
                          onClick={onSetPurchseProduct}
                        >
                          <span style={{ fontWeight: 900 }}>
                            {productBenefitPrice}
                          </span>
                          <span>??? ????????????</span>
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid sx={{ mt: 5, p: 5 }}>
        <Grid sx={{ mb: 2 }}>
          <span style={{ fontSize: "24px", fontWeight: 900 }}>????????????</span>
        </Grid>
        <img src={ProductTip1} style={{ width: "100%" }} />
      </Grid>
      <Grid sx={{ mt: 5, p: 5 }}>
        <Grid sx={{ mb: 2 }}>
          <span style={{ fontSize: "24px", fontWeight: 900 }}>
            The Freestyle
          </span>
        </Grid>
        <img src={ProductTip2} style={{ width: "100%" }} />
      </Grid>
      <Grid sx={{ mt: 5, p: 5 }}>
        <Grid sx={{ mb: 10, textAlign: "center" }}>
          <span style={{ fontSize: "32px", fontWeight: 900 }}>
            ????????? ????????? ?????? ???????????? ?????? ????????? ??????
          </span>
          <br />
          <br />
          <span style={{ fontSize: "14px" }}>
            ?????? ???????????? ????????? ????????? ?????? ??? ???????????? ??? ???????????????. The
            Freestyle??? ????????? ?????? ??? ????????? ????????? ?????? ???????????? ????????????
            ???????????????.
            <br />
            ????????? ?????? ???????????? ???????????? ??????????????? ??????:?????? ?????? 16:9
            ??????????????? ????????? ?????? ????????? ???????????????.
          </span>
        </Grid>
        <video autoPlay loop style={{ width: "100%" }}>
          <source src={ProductTip3} type="video/webm" />
        </video>
      </Grid>
      <Grid sx={{ mt: 5, p: 5 }}>
        <Grid sx={{ mb: 10, textAlign: "center" }}>
          <span style={{ fontSize: "32px", fontWeight: 900 }}>
            ????????? ?????? ??????, ???????????? ????????? 360 ?????????
          </span>
          <br />
          <br />
          <span style={{ fontSize: "14px" }}>
            ????????? ??????????????? ???????????? ????????? ???????????? ????????? ?????? ??? ??????.
            <br />
            ????????? ??????, ????????? ??? ???????????? ????????? ???????????? ???????????? ????????????
            ???????????? ???????????????.
          </span>
        </Grid>
        <video autoPlay loop style={{ width: "100%" }}>
          <source src={ProductTip4} type="video/webm" />
        </video>
      </Grid>
    </Container>
  );
}

export default Error;
