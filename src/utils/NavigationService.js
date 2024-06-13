import {CommonActions} from '@react-navigation/native';

/**
 * This method is used to navigate between the stack navigator, Navigation Props is screen props,
 * route name is screen to which you want navigate and params are option arguments to pass value to the route
 * @param {*} navigationProps
 * @param {*} routeName
 * @param {*} params
 */

const navigate = (navigationProps, routeName, params = null) => {
  navigationProps.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
};

/**
 * This method is used to reset the stack navigator, Navigation Props is screen props,
 * route name is screen which you want to reset and params are option arguments to pass value to the route
 * @param {*} navigationProps
 * @param {*} routeName
 * @param {*} params
 *
 */
const reset = (navigationProps, routeName, params = null) => {
  navigationProps.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: routeName,
          params: params,
        },
      ],
    }),
  );
};

/**
 * This method is used to go back to previous screen, Navigation Props is screen props,
 * and params are option arguments to pass value to the route
 * @param {*} navigationProps
 * @param {*} params
 */
const goBack = (navigationProps, params) => {
  if (navigationProps.canGoBack()) {
    navigationProps.goBack(params);
  } else {
    reset(navigationProps, 'Dashboard');
  }
};

/**
 * This method is used to navigate to different stack in drawer navigator, Navigation Props is screen props,
 * parentName is parent route of the stack navigator and routeName is the screen you want to navigate in that stack and
 * params are option arguments to pass value to the route
 * @param {*} navigationProps
 * @param {*} parentName
 * @param {*} routeName
 * @param {*} params
 */
const navigateToDifferentStack = (
  navigationProps,
  parentName,
  routeName,
  params,
) => {
  params.screen = routeName;
  navigationProps.navigate(parentName, params);
};

export default {
  navigate,
  reset,
  goBack,
  navigateToDifferentStack,
};
